import {
  BudgetsProvider,
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "./BudgetsContext";
import React from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { useRef } from "react";
// import { Trash3Fill } from "react-bootstrap-icons";
import { XCircleFill } from "react-bootstrap-icons";
import { currencyFormatter } from "../utils";

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === BudgetsProvider
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  function handleSubmit(e) {
    e.preventDefault();
    handleClose();
  }

  return (
    <>
      <Modal show={budgetId != null} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            <Stack direction='horizontal' gap='2'>
              <div>Expenses - {budget?.name}</div>
              {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                <Button
                  //   className='p-0 center'
                  onClick={() => {
                    deleteBudget(budget);
                  }}
                  variant='outline-danger btn-sm'
                >
                  Delete Budget
                  {/* <XCircleFill /> */}
                </Button>
              )}
            </Stack>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction='vertical' gap='3'>
            {expenses.map((expense) => (
              <Stack direction='horizontal' gap='2' key={expense.id}>
                <div className='me-auto fs-4'>{expense.description}</div>
                <div className='fs-5'>
                  {currencyFormatter.format(expense.amount)}
                </div>
                <Button
                  onClick={() => deleteExpense(expense)}
                  size='sm'
                  variant='primary-danger'
                >
                  &times;
                  {/* ^ gives an X for delete button */}
                </Button>
              </Stack>
            ))}
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
}
