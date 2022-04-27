import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import {
    FlexEnd, StyledButton, StyledFlex,
    StyledInput, UsersWrapper, UserWrapper
} from '../../../styles/styles'
import { ProfileType } from '../../../types/types'

interface UserProfileType {
    isLoading: boolean
    error: string
    readOnly: boolean
    setReadOnly: (_: boolean) => void
    profile: ProfileType | null
}

export const UsersProfile: React.FC<UserProfileType> = (props) => {
    useEffect(() => {
        formik.setValues({
            "name": props.profile?.name, "username":  props.profile?.username,
            "email":  props.profile?.email, "street":  props.profile?.address.street,
            "city":  props.profile?.address.city, "zipcode":  props.profile?.address.zipcode,
            "phone":  props.profile?.phone, "website":  props.profile?.website, "comment": ""
        })
    }, [ props.profile])
    const formik = useFormik({
        initialValues: {
            name: '' as string | undefined,
            username: '' as string | undefined,
            email: '' as string | undefined,
            street: '' as string | undefined,
            city: '' as string | undefined,
            zipcode: '' as string | undefined,
            phone: '' as string | undefined,
            website: '' as string | undefined,
            comment: '' as string | undefined

        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Incorrect name'),
            email: yup.string().required('Incorrect email'),
            username: yup.string().required('Incorrect username'),
            street: yup.string().required('Incorrect street'),
            city: yup.string().required('Incorrect city'),
            website: yup.string().required('Incorrect website'),
            phone: yup.string().required('Incorrect phone'),
            zipcode: yup.string().required('Incorrect zipcode'),
        })
    })
    return <UsersWrapper>
        <StyledFlex>
            <h1>Профиль пользователя</h1>
            <div><StyledButton bg={'#4B51EF'}
                onClick={() => props.setReadOnly(false)}>Редактировать</StyledButton>
            </div>
        </StyledFlex>
        {props.error && <h1>Ошибка</h1>}
        {!props.isLoading ? <>
            <form onSubmit={formik.handleSubmit}>
                <UserWrapper padding={'20px 0px 0px 12px'}
                    border={'1px solid #F3F3F3'} mgb={'10px'}>
                    <label htmlFor="name">Name</label>
                    <StyledInput
                        colorText={props.readOnly ? '#D8D8D8' : '#000000'}
                        color={formik.errors.name && '1px solid #D91313'}
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        readOnly={props.readOnly}
                    />
                    <label htmlFor="username">User name</label>
                    <StyledInput
                        colorText={props.readOnly ? '#D8D8D8' : '#000000'}
                        color={formik.errors.username && '1px solid #D91313'}
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        readOnly={props.readOnly}
                    />
                    <label htmlFor="email">Email</label>
                    <StyledInput
                        colorText={props.readOnly ? '#D8D8D8' : '#000000'}
                        color={formik.errors.email && '1px solid #D91313'}
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        readOnly={props.readOnly}
                    />
                    <label htmlFor="street">Street</label>
                    <StyledInput
                        colorText={props.readOnly ? '#D8D8D8' : '#000000'}
                        color={formik.errors.street ? '1px solid #D91313' : '1px solid #D8D8D8'}
                        id="street"
                        name="street"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.street}
                        readOnly={props.readOnly}
                    />
                    <label htmlFor="city">City</label>
                    <StyledInput
                        colorText={props.readOnly ? '#D8D8D8' : '#000000'}
                        color={formik.errors.city ? '1px solid #D91313' : '1px solid #D8D8D8'}
                        id="city"
                        name="city"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        readOnly={props.readOnly}
                    />
                    <label htmlFor="zipcode">ZIP-code</label>
                    <StyledInput
                        colorText={props.readOnly ? '#D8D8D8' : '#000000'}
                        color={formik.errors.zipcode && '1px solid #D91313'}
                        id="zipcode"
                        name="zipcode"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.zipcode}
                        readOnly={props.readOnly}
                    />
                    <label htmlFor="phone">Phone</label>
                    <StyledInput
                        colorText={props.readOnly ? '#D8D8D8' : '#000000'}
                        color={formik.errors.phone && '1px solid #D91313'}
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        readOnly={props.readOnly}
                    />
                    <label htmlFor="website">Web-site</label>
                    <StyledInput
                        colorText={props.readOnly ? '#D8D8D8' : '#000000'}
                        color={formik.errors.website && '1px solid #D91313'}
                        id="website"
                        name="website"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.website}
                        readOnly={props.readOnly}
                    />
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        id="comment"
                        name="comment"
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                        readOnly={props.readOnly}
                    />
                </UserWrapper>
                <FlexEnd>
                    <StyledButton bg={props.readOnly || !formik.isValid ? '#AFAFAF' : '#52CF4F'}
                        disabled={props.readOnly || !formik.isValid}
                        type="submit">Отправить</StyledButton>
                </FlexEnd>
            </form>
        </> : <h1>Идет загрузка...</h1>}
    </UsersWrapper>
}

