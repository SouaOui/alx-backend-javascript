export default function guardrail(mathFunction) {
  return new Promise((resolve) => {
    try {
      const result = mathFunction();
      resolve([result, "Guardrail was processed"]);
    } catch (error) {
      resolve([error.message, "Guardrail was processed"]);
    }
  });
}
