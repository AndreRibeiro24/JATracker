import client from './client'

// Example service — replace with your real endpoints
export const exampleService = {
  getAll: () => client.get('/examples'),
  getById: (id) => client.get(`/examples/${id}`),
  create: (data) => client.post('/examples', data),
  update: (id, data) => client.put(`/examples/${id}`, data),
  remove: (id) => client.delete(`/examples/${id}`),
}
