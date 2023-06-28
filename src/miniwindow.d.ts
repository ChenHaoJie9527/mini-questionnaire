declare interface Window {
  msw: {
    worker: SetupWorker;
  };
  $message: MessageMethods & BaseMethods;
}
