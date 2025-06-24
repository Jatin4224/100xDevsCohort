//challenge 1

type buttonProp = {
  label: string;
  disabled: boolean;
  onClick: () => void;
};

const Button = ({ label, disabled, onClick }: buttonProp) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {" "}
      {label}
    </button>
  );
};

export default Button;
