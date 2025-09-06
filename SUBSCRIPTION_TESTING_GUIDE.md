# Subscription Testing Guide

This guide explains how to test the subscription system with real Stripe webhooks and subscriptions.

## 🚀 Quick Start

### 1. **Start the Server**
```bash
node server.js
```
Server runs on `http://localhost:3010`

### 2. **Start Stripe Webhook Forwarding**
```bash
stripe listen --forward-to localhost:3010/api/subscription/webhook
```
This forwards real Stripe webhooks to your local server.

### 3. **Test Webhook Simulation**
```bash
node test-webhooks.js
```
Tests webhook handling without real Stripe events.

### 4. **Test Real Subscription Flow**
```bash
node test-real-subscription.js
```
Creates real Stripe checkout sessions for testing.

## 🧪 Testing Methods

### **Method 1: Webhook Simulation**
- **Purpose**: Test webhook handling logic
- **Command**: `node test-webhooks.js`
- **What it does**: Sends mock webhook events to test subscription creation, updates, and cancellation
- **Result**: All webhook handlers are tested without real Stripe events

### **Method 2: Real Stripe Integration**
- **Purpose**: Test complete subscription flow with real Stripe
- **Command**: `node test-real-subscription.js`
- **What it does**: 
  - Creates a test session
  - Checks subscription status
  - Gets available plans
  - Creates a real Stripe checkout session
- **Result**: Provides a real checkout URL for testing

### **Method 3: Manual Testing**
1. Run `node test-real-subscription.js`
2. Copy the checkout URL from the output
3. Open the URL in your browser
4. Use Stripe test card: `4242 4242 4242 4242`
5. Complete the payment
6. Watch webhook events in your terminal
7. Check subscription status via API

## 🔧 Test Cards

Use these Stripe test cards for different scenarios:

| Card Number | Description | Result |
|-------------|-------------|---------|
| `4242 4242 4242 4242` | Successful payment | ✅ Subscription created |
| `4000 0000 0000 0002` | Declined card | ❌ Payment failed |
| `4000 0000 0000 9995` | Insufficient funds | ❌ Payment failed |
| `4000 0000 0000 0069` | Expired card | ❌ Payment failed |

## 📊 API Endpoints

### **Get Active Subscription**
```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     http://localhost:3010/api/subscription/active
```

### **Get Available Plans**
```bash
curl http://localhost:3010/api/subscription/plans
```

### **Create Checkout Session**
```bash
curl -X POST \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"planId": "basic"}' \
     http://localhost:3010/api/subscription/checkout
```

### **Cancel Subscription**
```bash
curl -X POST \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     http://localhost:3010/api/subscription/cancel
```

## 🔍 Webhook Events

The system handles these Stripe webhook events:

- **`checkout.session.completed`**: When a checkout session is completed
- **`customer.subscription.created`**: When a new subscription is created
- **`customer.subscription.updated`**: When a subscription is updated
- **`customer.subscription.deleted`**: When a subscription is canceled

## 🐛 Debugging

### **Check Webhook Forwarding**
```bash
ps aux | grep stripe
```
Should show the Stripe CLI process forwarding webhooks.

### **Check Server Logs**
Look for webhook events in your server console:
```
Unhandled event type customer.subscription.created
```

### **Test Webhook Endpoint**
```bash
curl -X POST \
     -H "stripe-signature: test_signature" \
     -H "Content-Type: application/json" \
     -d '{"type": "test.event"}' \
     http://localhost:3010/api/subscription/webhook
```

## 📝 Test Scenarios

### **Scenario 1: New Subscription**
1. Run `node test-real-subscription.js`
2. Complete payment with test card
3. Verify subscription appears in IPFS
4. Check subscription status via API

### **Scenario 2: Subscription Update**
1. Create a subscription
2. Update the subscription in Stripe dashboard
3. Verify webhook is received
4. Check updated subscription data

### **Scenario 3: Subscription Cancellation**
1. Create a subscription
2. Cancel it via API or Stripe dashboard
3. Verify webhook is received
4. Check subscription status shows as canceled

## 🎯 Expected Results

### **Webhook Simulation Test**
- ✅ All 3 webhook events should return 200 status
- ✅ All webhook handlers should execute successfully
- ✅ Response should show "Webhook received"

### **Real Subscription Test**
- ✅ Session creation should succeed
- ✅ Initial subscription status should show "No active subscription"
- ✅ Plans should be returned correctly
- ✅ Checkout session should be created successfully
- ✅ Checkout URL should be valid and openable

## 🚨 Troubleshooting

### **Port Already in Use**
```bash
lsof -ti:3010 | xargs kill -9
```

### **Stripe CLI Not Working**
```bash
stripe login
stripe listen --forward-to localhost:3010/api/subscription/webhook
```

### **Webhook Signature Errors**
The system automatically handles test signatures. For real webhooks, ensure the Stripe CLI is running and forwarding events.

## 📚 Next Steps

1. **Test with Real Cards**: Use the provided test cards to simulate different payment scenarios
2. **Monitor Webhooks**: Watch the console for webhook events during testing
3. **Verify IPFS Storage**: Check that subscription data is properly stored in IPFS
4. **Test Edge Cases**: Try invalid plans, missing tokens, etc.
5. **Production Testing**: Use real Stripe keys for production testing

---

**Happy Testing! 🚀**
