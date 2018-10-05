export class Campaign {
  code = '';
  description = '';
  constructor({ code, description }) {
    this.code = code;
    this.description = description;
  };

  // TODO change mock method
  getPromotionsProgress() {
    if (this.hasAnyPromotions()) {
      const progress = Math.ceil(Math.random() * 100);
      return this.code === '3' ? 100 : progress;
    } else {
      return 0;
    }
  }
  // TODO change mock method
  getExpiredStateFlag() {
    return this.code === '3';
  }

  hasAnyPromotions() {
    // return this.promotions && (Array.isArray(this.promotions)) && this.promotions.length > 0;
    console.log(this.props);

    return false;
  }

  addPromotion(code) {
  }
}