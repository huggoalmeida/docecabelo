import { useState } from 'react';
      import { useNavigate } from 'react-router-dom';

      function AdminLogin({ setIsAuthenticated }) {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();

        const handleLogin = (e) => {
          e.preventDefault();
          if (username === 'admin' && password === 'doce123') {
            setIsAuthenticated(true);
            navigate('/admin');
          } else {
            alert('Usuário ou senha incorretos!');
          }
        };

        return (
          <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login Admin</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
                Entrar
              </button>
            </form>
          </div>
        );
      }

      export default AdminLogin;