const Notification = require("../model/notificationModel");

getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id }).sort(
      "-createdAt"
    );
    res.json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const notificationController= { getNotifications, markAsRead };
module.exports = notificationController;