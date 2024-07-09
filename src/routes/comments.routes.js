import { Router } from 'express';
import CommentController from '../controllers/comments.js';
import authenticateToken from '../middlewares/authenticateToken.js';
import authenticateRole from '../middlewares/authenticateRole.js';
import { ROLE_ADMIN, ROLE_USER } from '../utils/constants.js';

const router = Router();

router.post('/', [authenticateToken, authenticateRole([ROLE_ADMIN])], CommentController.createComment);

router.get('/:idProp', [authenticateToken, authenticateRole([ROLE_ADMIN])], CommentController.getPropertyComments);

router.delete('/:id', [authenticateToken, authenticateRole([ROLE_ADMIN])], CommentController.deleteComment);
export default router;
