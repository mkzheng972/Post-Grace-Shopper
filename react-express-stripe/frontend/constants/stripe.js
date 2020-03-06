const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_3A7eyZKdi13CTSenFYkd11C8007yHJaqlX'
export default STRIPE_PUBLISHABLE
