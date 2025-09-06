# Payment Testing Guide

Complete guide for testing subscription payments and webhooks.

## 🎯 **Your Next Tasks - Choose Your Path:**

### **Option 1: Quick Automated Testing (Recommended)**
```bash
node test-automated-payment.js
```
**What it does:**
- ✅ Creates real Stripe checkout session
- ✅ Simulates complete payment flow
- ✅ Tests all webhook events
- ✅ No manual intervention needed
- ✅ Perfect for development testing

### **Option 2: Manual Payment Testing (Real Browser)**
```bash
node test-real-subscription.js
```
**What it does:**
- ✅ Creates real Stripe checkout session
- ✅ Provides checkout URL for browser testing
- ✅ Use test card: `4242 4242 4242 4242`
- ✅ Real payment experience
- ✅ Watch webhooks in server console

### **Option 3: Real Stripe Webhook Testing (Advanced)**
```bash
node test-real-stripe-webhooks.js
```
**What it does:**
- ✅ Creates real checkout session
- ✅ Uses Stripe CLI to trigger real webhooks
- ✅ Tests with actual Stripe events
- ✅ Most realistic testing scenario

## 🚀 **Quick Start - Automated Testing**

Run this command to test everything automatically:

```bash
node test-automated-payment.js
```

**Expected Output:**
```
🚀 Starting Automated Payment Flow Simulation...
🔐 Creating test session...
✅ Session created successfully
🛒 Creating checkout session...
✅ Checkout session created: cs_test_xxx
📨 Simulating checkout.session.completed webhook...
✅ Checkout webhook processed: 200
📨 Simulating customer.subscription.created webhook...
✅ Subscription webhook processed: 200
📋 Checking subscription status...
🔄 Testing subscription update...
✅ Update webhook processed: 200
🗑️ Testing subscription cancellation...
✅ Cancel webhook processed: 200
🎉 Complete payment flow simulation finished!
```

## 🔧 **Test Cards for Manual Testing**

| Card Number | Description | Result |
|-------------|-------------|---------|
| `4242 4242 4242 4242` | Successful payment | ✅ Subscription created |
| `4000 0000 0000 0002` | Declined card | ❌ Payment failed |
| `4000 0000 0000 9995` | Insufficient funds | ❌ Payment failed |
| `4000 0000 0000 0069` | Expired card | ❌ Payment failed |

## 📊 **What Each Test Validates**

### **Automated Test (`test-automated-payment.js`)**
- ✅ Session creation
- ✅ Checkout session creation
- ✅ Webhook processing (all events)
- ✅ Subscription data handling
- ✅ IPFS storage simulation
- ✅ Error handling

### **Manual Test (`test-real-subscription.js`)**
- ✅ Real Stripe integration
- ✅ Browser payment flow
- ✅ Real webhook events
- ✅ Complete user experience

### **Real Webhook Test (`test-real-stripe-webhooks.js`)**
- ✅ Stripe CLI integration
- ✅ Real webhook signatures
- ✅ Production-like testing
- ✅ Advanced scenarios

## 🎯 **Recommended Testing Sequence**

### **Phase 1: Development Testing**
```bash
# Test webhook processing
node test-webhooks.js

# Test automated payment flow
node test-automated-payment.js
```

### **Phase 2: Integration Testing**
```bash
# Test real checkout sessions
node test-real-subscription.js
# Then complete payment in browser
```

### **Phase 3: Production Testing**
```bash
# Test with real Stripe webhooks
node test-real-stripe-webhooks.js
```

## 🔍 **Monitoring and Debugging**

### **Check Server Logs**
Watch your server console for webhook processing logs:
```
🛒 Processing checkout session completed: {...}
✅ Subscription created and stored: {...}
🔄 Processing subscription updated: {...}
🗑️ Processing subscription deleted: {...}
```

### **Verify IPFS Storage**
Check that subscription data is properly stored in IPFS after webhook processing.

### **Test Error Scenarios**
- Invalid plan IDs
- Missing authentication
- Malformed webhook data
- Network failures

## 🚨 **Troubleshooting**

### **Server Not Running**
```bash
# Kill existing processes
lsof -ti:3010 | xargs kill -9

# Start server
node server.js
```

### **Stripe CLI Issues**
```bash
# Re-login to Stripe
stripe login

# Restart webhook forwarding
stripe listen --forward-to localhost:3010/api/subscription/webhook
```

### **Webhook Not Processing**
- Check server logs for errors
- Verify webhook endpoint is accessible
- Ensure signature validation is disabled for testing

## 📈 **Next Steps After Testing**

1. **✅ Webhook Processing**: Verify all webhook events are handled correctly
2. **✅ IPFS Storage**: Confirm subscription data is stored properly
3. **✅ Stripe Integration**: Ensure real payments work end-to-end
4. **✅ Error Handling**: Test failure scenarios
5. **✅ Production Ready**: Deploy with confidence!

## 🎉 **Success Criteria**

Your subscription system is ready when:
- ✅ All automated tests pass
- ✅ Real payments complete successfully
- ✅ Webhooks process correctly
- ✅ Subscription data is stored in IPFS
- ✅ Error scenarios are handled gracefully

---

**Ready to test? Start with:** `node test-automated-payment.js` 🚀
