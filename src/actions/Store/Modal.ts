export default class Modal {
  public static readonly OPEN = "MODAL_OPEN";
  public static readonly CLOSE = "MODAL_CLOSE";
  public static readonly CLOSE_ALL = "MODAL_CLOSE_ALL";

  public static openModal(data: any) {
    return {
      data,
      type: Modal.OPEN,
    };
  }

  public static close() {
    return {
      type: Modal.CLOSE,
    };
  }

  public static closeAll() {
    return {
      type: Modal.CLOSE_ALL,
    };
  }
}
