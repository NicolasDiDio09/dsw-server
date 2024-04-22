import Comment from '../models/comments.js';
import user from './user.js';

const createComment = async (req, res) => {
  try {
    const comment = req.body;

    const newComment = await Comment.create({
      message: comment.message,
      user: comment.user,
      property: comment.property,
      date: comment.date,
    });
    res.status(200).json({
      message: 'Comentario creado ',
      data: newComment,
    });
  } catch (e) {
    res.status(400).json({
      message: 'Error al crear el comentario',
      error: true,
      data: null,
    });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById({ _id: id });
    res.status(200).json({
      message: 'Commentario Encontrado',
      data: comment,
      error: false,
    });
  } catch (e) {
    res.status(400).json({
      message: 'Error al encontrar el comentario',
      error: true,
      data: null,
    });
  }
};

const getPropertyComments = async (req, res) => {
  const { idProp } = req.params;
  try {
    const propComments = await Comment.find({ property: idProp }).populate(['user']);
    res.status(200).json({
      message: 'Comentarios de propiedad encontrados',
      data: propComments,
    });
  } catch (e) {
    res.status(400).json({
      message: 'Error al encontrar comentarios de propiedad',
      error: true,
      data: null,
    });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const commentD = await Comment.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: 'Comentario eliminado correctamente',
      data: commentD,
      error: false,
    });
  } catch (e) {
    res.status(400).json({
      message: 'Error al eliminar el comentario',
      error: true,
      data: null,
    });
  }
};

export default {
  createComment, getOne, getPropertyComments, deleteComment,
};
