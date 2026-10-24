function parseAge(input) {
  const age = Number(input);
  if (String(input).trim() === "" || !Number.isFinite(age) || age < 0) {
    throw new Error("Enter a valid age");
  }
  return age;
}

for (const input of ["25", "hello", ""]) {
  try {
    console.log("Age:", parseAge(input));
  } catch (error) {
    console.log(`Input ${JSON.stringify(input)}: ${error.message}`);
  }
}
