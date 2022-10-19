import React from "react";
import "./NewsLetter.css";
import { useForm, ValidationError } from '@formspree/react';

const NewsLetter = () => {
    const [state, handleSubmit] = useForm("myyvppav");
    if (state.succeeded) {
        return <p>Thanks for joining! You'll be updated!</p>;
    }
    return (
        <section className="newsletter-section flex p-4 bg-primary">
            <form onSubmit={handleSubmit} class="newsletter__form text-center">
                <h2>Subscribe to Our Newsletter</h2>
                <h4 class="mb-1">You won’t get dissapointed by us</h4>
                <label for="mail"></label>
                <div class="newsletter__form__email flex">
                    <input
                        type="email"
                        placeholder="Your Email"
                        name="mail"
                        required
                        class="newsletter__form__email__your_email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <input
                        type="submit"
                        value="Subscribe"
                        class="newsletter__form__email__submit_btn bg-primary"
                        disabled={state.submitting}
                    />
                </div>
                {/*
                <div class="newsletter__form__email_copy flex mt-1">
                    <label class="newsletter__form__email_copy__label">
                        <input
                            type="checkbox"
                            name="checkbox"
                            class="newsletter__form__email_copy__check_box"
                        />
                    </label>

                    <span class="text-left">Email me a copy of my responses</span>
                </div>
                */}
            </form>
        </section>
    );
};

export default NewsLetter;