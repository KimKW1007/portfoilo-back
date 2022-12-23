import pkg from 'mongoose';
const { Schema, model, connection } = pkg;

const CommentSchema = new Schema(
  {
    commentId: {
      type: Number,
      required: false
    },
    comment: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: String
  },
  {
    timestamps: true
  }
);
CommentSchema.pre('save', async function () {
  const sequenceCollection = connection.collection('sequences');

  const sequence = (
    await sequenceCollection.findOneAndUpdate(
      {
        collectionName: 'comments',
      },
      { $inc: { value: 1 } },
      {
        upsert: true,
        returnDocument: 'after',
      }
    )
  ).value;

  this.set({ commentId: sequence.value });
});



const CommentModel = model('Comments', CommentSchema);

export { CommentModel };
