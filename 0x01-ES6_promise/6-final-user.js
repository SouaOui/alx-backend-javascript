import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  const [userData, photoData] = await Promise.allSettled([
    signUpUserPromise,
    uploadPhotoPromise,
  ]);

  const results = [];

  if (userData.status === 'fulfilled') {
    results.push({
      status: 'fulfilled',
      value: userData.value,
    });
  } else {
    results.push({
      status: 'rejected',
      value: userData.reason.message,
    });
  }

  if (photoData.status === 'fulfilled') {
    results.push({
      status: 'fulfilled',
      value: 'Photo uploaded successfully',
    });
  } else {
    results.push({
      status: 'rejected',
      value: photoData.reason.message,
    });
  }

  return results;
}
