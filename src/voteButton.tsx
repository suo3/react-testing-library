import React from "react";
import { Button } from "react-bootstrap";

interface VoteButtonProps {
  variant: string;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  testid: string;
}
export const VoteButton: React.FC<VoteButtonProps> = (props) => {
  return (
    <Button
      data-testid={props.testid}
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.children}
    </Button>
  );
};

export default VoteButton;
