import axios from '../config/axios';

export const updateProfile = formData => axios.patch('/users', formData);
export const uploadSlip = formData => axios.post('/users/slip', formData);

export const getProfileUser = profileUserId =>
  axios.get('/users/' + profileUserId);
export const getBill = userId => axios.get(`/users/${userId}/bill`);
