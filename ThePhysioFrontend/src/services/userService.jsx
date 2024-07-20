const UserService = {
    login: async (email, password) => {
      // Mock API call - replace with your actual API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'admin@example.com' && password === 'password') {
            resolve({ token: 'fake-jwt-token', role: 'admin' });
          } else {
            reject(new Error('Invalid email or password'));
          }
        }, 1000);
      });
    },
  };
  
  export default UserService;
  