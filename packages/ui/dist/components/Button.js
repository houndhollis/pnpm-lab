import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ label, onClick }) => {
    return (_jsx("button", { onClick: onClick, style: {
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
        }, children: label }));
};
export default Button;
