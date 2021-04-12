import { message } from "antd"

export const showMessage = (loadingText,successText) => {
	message
	  .loading(loadingText, 2.5)
	  .then(() => message.success(successText, 2.5))
}