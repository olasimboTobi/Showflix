import { useNavigate } from 'react-router-dom';
import MovieDetailsSubPage from './MovieDetailsSubPage';

export function Modal() {
  const navigate = useNavigate();
  return (
    <div
      className="modal-wrapper"
      onClick={() => navigate('/')}
    >
      <div
        className="modal"
        onClick={e => e.stopPropagation()}
      >
        <p>
          <MovieDetailsSubPage/>
        </p>
      </div>
    </div>
  );
}