# Badges v1.0.0

## Installation

Using npm:
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

## JSX Implementation for Badges

```JSX
        <!--How to create ShareTray View in the Component-->
       <ICGeneralShare
          onPress={() => {
            IMShareTray('Content Title','Test message','https://reactnative.dev/img/tiny_logo.png','https://reactnative.dev/img/tiny_logo.png');
          }}
        />
```

### Props in ShareTray Component

| **_attribute_** | **_format_** | **_description_**     | **_isRequired_** |
| --------------- | ------------ | --------------------- | ---------------- |
| title           | String       | share title           | Optional         |
| message         | String       | share message         | Optional         |
| url             | String       | Share url             | Optional         |
| imageUrl        | String       | Share imageUrl        | Optional         |
