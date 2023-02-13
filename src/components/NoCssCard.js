// import { Card } from "react-bootstrap/Card";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { currencyFormatter } from "../utils";

const NoCssCard = ({ name, amount, max }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <div>{name}</div>
          <div>
            {currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
          </div>
        </Card.Title>
        <Card.Subtitle>
          Sit excepteur qui in reprehenderit cupidatat irure do commodo officia
          elit.
        </Card.Subtitle>
        <Card.Text>
          Proident sint ea dolor non reprehenderit ea aliquip. Nulla excepteur
          minim incididunt et. Consectetur aliquip ad consectetur cillum Lorem
          officia et amet irure eu nulla adipisicing.
        </Card.Text>
        <Button variant='primary'>Add Expense</Button>
        <Button variant='-outlined-primary'>View Expenses</Button>
      </Card.Body>
    </Card>
  );
};

export default NoCssCard;
