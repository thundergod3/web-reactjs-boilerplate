import React from "react";
import { Button, Result } from "antd";

import ROUTES from "@/constants/routes";

type Props = {
  error?: Error & { digest?: string | undefined };
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title="Đã xảy ra sự cố!"
          subTitle="Xin vui tải lại trang hoặc thử lại sau."
          extra={[
            <Button key="reload" onClick={this.handleReloadPage}>
              Tải lại trang
            </Button>,
            <Button key="homepage" href={ROUTES.home} type="primary">
              Quay lại trang chủ
            </Button>,
          ]}></Result>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
