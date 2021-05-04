export default class Modal {
  public static readonly OPEN = "MODAL_OPEN";
  public static readonly CLOSE = "MODAL_CLOSE";
  public static readonly CLOSE_ALL = "MODAL_CLOSE_ALL";

  public static openModal(data: unknown): { type: string; data: unknown } {
    return {
      data,
      type: Modal.OPEN,
    };
  }

  public static close(): { type: string } {
    return {
      type: Modal.CLOSE,
    };
  }

  public static closeAll(): { type: string } {
    return {
      type: Modal.CLOSE_ALL,
    };
  }
}
