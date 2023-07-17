import axios from '../config/axios';

export const getProfileUser = profileUserId =>
  axios.get('/users/' + profileUserId);
export const updateProfile = formData => axios.patch('/users', formData);

export const getBill = userId => axios.get(`/users/${userId}/bill`);
export const uploadSlip = formData => axios.post('/users/slip', formData);
