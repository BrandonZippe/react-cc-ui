import React, { useState, useRef, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from './CardForm/CardForm';

const initialState = {
	cardNumber: '**** **** **** ****',
	cardHolder: 'FULL NAME',
	cardMonth: '',
	cardYear: '',
	cardCVC: ''
};

const CardValidator = () =>{

	const [state, setState] = useState(initialState);
	const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

	const updateStateValues = useCallback(
		(keyName, value) => {
			setState({
				...state,
				[keyName]: value || initialState[keyName]
			});
		},
		[state]
	);

	let formFieldsRefObj = {
		cardNumber: useRef(),
		cardHolder: useRef(),
		cardDate: useRef(),
		cardCVC: useRef()
	};

	let focusFormFieldByKey = useCallback((key) => {
		formFieldsRefObj[key].current.focus();
	}, [formFieldsRefObj]);


	let cardElementsRef = {
		cardNumber: useRef(),
		cardHolder: useRef(),
		cardDate: useRef()
	};

	let onCardFormInputFocus = (_event, inputName) => {
		const refByName = cardElementsRef[inputName];
		setCurrentFocusedElm(refByName);
	};

	let onCardInputBlur = useCallback(() => {
		setCurrentFocusedElm(null);
	}, []);


	return (
		<Row>
			<Col xs={12} md={{ span: 6, offset: 3 }}>
				<div className="wrapper">
					<Form
						cardMonth={state.cardMonth}
						cardYear={state.cardYear}
						onUpdateState={updateStateValues}
						cardNumberRef={formFieldsRefObj.cardNumber}
						cardHolderRef={formFieldsRefObj.cardHolder}
						cardDateRef={formFieldsRefObj.cardDate}
						onCardInputFocus={onCardFormInputFocus}
						onCardInputBlur={onCardInputBlur}
					>

					</Form>
				</div>
			</Col>
		</Row>
	);
}

export default CardValidator;
