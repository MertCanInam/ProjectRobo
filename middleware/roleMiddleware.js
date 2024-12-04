const roleMiddleware = (roles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;
    console.log('Kullanıcının rolü:', userRole);
    if (!roles.includes(userRole)) {
      console.log('Yetkilendirme hatası: rol uygun değil');
      return res.status(403).json({ message: 'Erişim yetkiniz yok' });
    }
    next();
  };
};

module.exports = roleMiddleware;
