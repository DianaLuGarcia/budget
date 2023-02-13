import { Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./App.css";
import BudgetCard from "./components/BudgetCard";

import NoCssCard from "./components/NoCssCard";

function App() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let day = d.getDate();
  let year = d.getFullYear();
  let date = month[d.getMonth()];
  return (
    <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>{date} Budget</h1>
        <h4>
          {date} {day}, {year}
        </h4>
        <Button variant='outline-secondary'>Add a Budget</Button>
        <Button variant='primary'>Add Expense</Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "re[eat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <BudgetCard
          name='Entertainment'
          gray
          amount={700}
          max={1000}
        ></BudgetCard>
        <BudgetCard name='Food' gray amount={100} max={600}></BudgetCard>
        <BudgetCard name='Other' gray amount={700} max={500}></BudgetCard>
        <BudgetCard name='Total' gray amount={0} max={1000}></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
