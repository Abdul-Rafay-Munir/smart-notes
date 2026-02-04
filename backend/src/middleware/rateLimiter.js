import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("userId");
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many request, please try again later" });
    }
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
