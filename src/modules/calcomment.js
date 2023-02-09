const commentUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=';
const calcom = async (id) => {
  const comments = await fetch(`${commentUrl}${id}`, {
    method: 'Get',
  });
  return comments.json();
};
export default calcom;
