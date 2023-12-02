import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';
import DefaultErrorBoundary from './DefaultErrorBoundary';

type ErrorBoundaryProps = PropsWithChildren<{
  fallback?: ReactNode;
}>;

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      // fallback 컴포넌트가 props에 없으면 DefaultErrorBoundary 컴포넌트를 렌더링한다.
      return this.props.fallback || <DefaultErrorBoundary error={this.state.error} />;
    }

    // 에러가 없으면 children을 렌더링한다.
    return this.props.children;
  }
}
