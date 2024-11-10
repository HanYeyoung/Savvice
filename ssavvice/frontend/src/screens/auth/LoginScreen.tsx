import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils';

function LoginScreen() {
  const login = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log('login.values', login.values);
  };

  return (
    <SafeAreaimport React, {useRef} from 'react';
    import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
    import InputField from '../../components/InputField';
    import CustomButton from '../../components/CustomButton';
    import useForm from '../../hooks/useForm';
    import {validateLogin} from '../../utils';
    
    function LoginScreen() {
      const passwordRef = useRef<TextInput | null>(null);
      const login = useForm({
        initialValue: {email: '', password: ''},
        validate: validateLogin,
      });
    
      const handleSubmit = () => {
        console.log('login.values', login.values);
      };
    
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.inputContainer}>
            <InputField
              autoFocus
              placeholder="Email"
              error={login.errors.email}
              touched={login.touched.email}
              inputMode="email"
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => passwordRef.current?.focus()}
              {...login.getTextInputProps('email')}
            />
            <InputField
              ref={passwordRef}
              placeholder="Password"
              error={login.errors.password}
              touched={login.touched.password}
              secureTextEntry
              returnKeyType="join"
              onSubmitEditing={handleSubmit}
              {...login.getTextInputProps('password')}
            />
          </View>
          <CustomButton
            label="Log-In"
            variant="filled"
            size="large"
            onPress={handleSubmit}
          />
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        margin: 30,
      },
      inputContainer: {
        gap: 20,
        marginBottom: 30,
      },
    });
    
    export default LoginScreen;View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="email"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          {...login.getTextInputProps('email')}
        />
        <InputField
          placeholder="password"
          error={login.errors.password}
          touched={login.touched.password}
          secureTextEntry
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label="Login"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;