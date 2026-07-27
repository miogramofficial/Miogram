"use client";

import { useState } from "react";

import UsernameInput from "./UsernameInput";
import DateOfBirthPicker from "./DateOfBirthPicker";
import CountrySelector from "./CountrySelector";
import ContinueButton from "./ContinueButton";

export default function ProfileForm() {
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");

  const isValid =
    username.trim() !== "" &&
    dob !== "" &&
    country !== "";

  const handleContinue = () => {
    console.log({
      username,
      dob,
      country,
    });
  };

  return (
    <div className="space-y-6">
      <UsernameInput
        value={username}
        onChange={setUsername}
      />

      <DateOfBirthPicker
        value={dob}
        onChange={setDob}
      />

      <CountrySelector
        value={country}
        onChange={setCountry}
      />

      <ContinueButton
        disabled={!isValid}
        onClick={handleContinue}
      />
    </div>
  );
}