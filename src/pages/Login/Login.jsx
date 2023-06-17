import s from './Login.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Login = (props) => {

    const validateName = (value) => {
      let error;
      if (!value) {
        error = '* Поля обязательные для заполнения';
      }
      return error;
    };
    return (
    <div className={s.authorization}>
        {props.authReducer.isAuth ?  <div>авторизирован</div> :
        <div className={s.background}>
            <div className={s.item}>
                <h2 className={s.title}>Авторизация</h2>
                <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => {props.login(values)}}>
                  <Form>
                    <div className={s.text}>Ваш email:</div>
                    <Field type="text" name="email" validate={validateName}/>
                    <ErrorMessage name="email" component="div" className={s.error_message}/>
                    <div className={s.text}>Ваш пороль:</div>
                    <Field type="password" name="password" autoComplete="password" validate={validateName} />
                    <ErrorMessage name="password" component="div" className={s.error_message}/>
                    <button className={s.button} type="submit">Отправить</button>
                  </Form>
                </Formik>
            </div>
        </div>
      }
    </div>
    );
}

export default Login;