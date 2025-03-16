// CodeEditor.tsx
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { sql } from "@codemirror/lang-sql";
import { githubLight } from "@uiw/codemirror-theme-github";
import { text } from "stream/consumers";

const languages = {
    javascript: javascript(),
    python: python(),
    cpp: cpp(),
    java: java(),
    rust: rust(),
    go: go(),
    sql: sql(),
};

interface CodeEditorProps {
    language?: keyof typeof languages;
    code: string;
    onLanguageChange?: (lang: keyof typeof languages) => void;
    onCodeChange?: (code: string) => void;
    readOnly? : boolean;
}

export const CodeEditor = ({
    language = "cpp",
    code,
    onLanguageChange,
    onCodeChange,
    readOnly = false
}: CodeEditorProps) => {
    return (
        <div className="w-full space-y-4">
            {/* Selector de lenguaje */}
            {!readOnly && (
                <select 
                    value={language}
                    onChange={(e) => onLanguageChange?.(e.target.value as keyof typeof languages)}
                    className="w-full p-2 border-2 border-teal-500 rounded-lg bg-neutral-900 text-white focus:outline-none focus:border-teal-300"
                >
                    {Object.keys(languages).map((lang) => (
                        <option 
                            key={lang} 
                            value={lang}
                            className="bg-neutral-800 text-white"
                        >
                            {lang.toUpperCase()}
                        </option>
                    ))}
                </select>
            )}

            {/* Contenedor con scroll */}
            <div className="w-full h-[300px] overflow-y-auto rounded-lg border-2 border-teal-500" style={{textAlign: "left"}}>
                <CodeMirror
                    value={code}
                    theme={githubLight}
                    extensions={[languages[language]]}
                    onChange={onCodeChange}
                    className="text-[15px] bg-transparent"
                    style={{
                        height: "100%",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        textAlign: "left"
                    }}
                    readOnly = {readOnly}
                    basicSetup = {{
                        foldGutter: false,
                        dropCursor: false,
                        allowMultipleSelections: false,
                        highlightActiveLineGutter: false,
                    }}
                />
            </div>
        </div>
    );
};