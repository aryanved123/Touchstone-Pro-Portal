import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

interface CandidateData {
  name: string;
  legalStatus: string;
  hasMCCQE1: boolean;
  postgradMonths: number;
  independentMonths: number;
  completedRotations: boolean;
  impairmentToPractice: boolean;
}

app.post('/evaluate', (req, res) => {
  const data: CandidateData = req.body;
  const flags: any[] = [];

  if (!(data.legalStatus === 'Permanent Resident' || data.legalStatus === 'Canadian Citizen')) {
    flags.push({ type: 'Legal Status', severity: 'high', message: 'Applicant must be PR or Citizen.' });
  }

  if (!data.hasMCCQE1) {
    flags.push({ type: 'MCCQE1 Missing', severity: 'high', message: 'Applicant must have MCCQE1 or LMCC.' });
  }

  if (data.postgradMonths < 24 && data.independentMonths < 36) {
    flags.push({ type: 'Insufficient Practice', severity: 'medium', message: 'Does not meet training + practice combo.' });
  }

  if (!data.completedRotations) {
    flags.push({ type: 'Rotation Requirement', severity: 'medium', message: 'Must complete 7 rotations.' });
  }

  if (data.impairmentToPractice) {
    flags.push({ type: 'Impairment Flag', severity: 'high', message: 'Self-reported impairment to practice.' });
  }

  res.json({ flags });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
