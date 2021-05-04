import * as Action from "@actions/index";
import { useDispatch } from "@helpers/Store";

export default class Modal {
  /**
   * Открываем модалку
   */
  public static open(modal: string): void {
    useDispatch(Action.Modal.openModal({ modal }));
  }

  /**
   * Закрываем модалку
   */
  public static close(): void {
    useDispatch(Action.Modal.close());
  }

  /**
   * Закрываем все модалки
   */
  public static closeAll(): void {
    useDispatch(Action.Modal.closeAll());
  }
}
