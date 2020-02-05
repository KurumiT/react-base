import * as Store from "../actions/Store";

export default class Modal {
  /**
   * Открываем модалку
   *
   * @return function(Dispatch)->Modal
   */
  public static open(modal: string) {
    return (Dispatch: any) => {
      Dispatch(Store.Modal.openModal({ modal }));
    };
  }

  /**
   * Закрываем модалку
   *
   * @return function(Dispatch)->Modal
   */
  public static close() {
    return (Dispatch: any) => {
      Dispatch(Store.Modal.close());
    };
  }

  /**
   * Закрываем все модалки
   *
   * @return function(Dispatch)->Modal
   */
  public static closeAll() {
    return (Dispatch: any) => {
      Dispatch(Store.Modal.closeAll());
    };
  }
}
