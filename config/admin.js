module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84f883784a9d7b327de8c1bcaeeabefe'),
  },
});
