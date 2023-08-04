
export const requestData = async () => {
    const response = await fetch("http://localhost:3001/user");
    const result = await response.json();
    return result;
  };