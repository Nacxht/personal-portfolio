export function ageCalculator(birthday: string) {
  const today = new Date();
  const birthdayObj = new Date(birthday);
  let age = today.getFullYear() - birthdayObj.getFullYear();
  const monthDiff = today.getMonth() - birthdayObj.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdayObj.getDate())
  ) {
    age--;
  }

  return age;
}
