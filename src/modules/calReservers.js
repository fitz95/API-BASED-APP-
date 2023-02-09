const reserveUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations?item_id=';
const calReserve = async (id) => {
  const reservtions = await fetch(`${reserveUrl}${id}`, {
    method: 'Get',
  });
  return reservtions.json();
};

export default calReserve;
