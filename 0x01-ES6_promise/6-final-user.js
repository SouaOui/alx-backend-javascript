import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const results = [];
  try {
    const userData = await signUpUser(firstName, lastName);
    results.push({
      status: 'fulfilled',
      value: userData,
    });
    await uploadPhoto(fileName);
  } catch (error) {
    results.push({
      status: 'rejected',
      value: error.message,
    });
  }
  return results;
}
