import styled from "styled-components";

// Overall Container
export const Container = styled.div`
  background-color: #f9f9f9;
  color: #333;
  border-radius: 15px;
  padding: 20px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  font-family: "Roboto", sans-serif;
`;

// Todo List Container
export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  cursor: pointer;
`;

// Each Todo Row
export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 8px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
    background-color: #f0f0f0;
  }
`;

// Todo Text
export const Text = styled.span`
  flex: 1;
  font-size: 1rem;
  color: ${(props) => (props.isCompleted ? "#8b8b8b" : "#333")};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
  transition: color 0.3s ease, text-decoration 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: ${(props) => (props.isCompleted ? "#666" : "#007bff")};
  }
`;

// Delete Icon
export const DeleteIcon = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: #ef7360;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #c0392b;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

// Key Container
export const KeyContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  list-style-type: square;
  border: 1px solid #007bff;
  padding: 10px;
  border-radius: 8px;
  background-color: #e8f0ff;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

// Key Bullet Point
export const BulletPoint = styled.li`
  :last-child {
    color: red;
  }
  @media (max-width: 420px) {
    padding: 5px 0;
  }
`;
