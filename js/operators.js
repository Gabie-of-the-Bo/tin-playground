let operators = [
    {
        name: 'Arithmetic',
        size: 'normal',
        ops: [
            ['+', 'Pops \\(a\\) and \\(b\\), pushes \\(a + b\\)'],
            ['-', 'Pops \\(a\\) and \\(b\\), pushes \\(a - b\\)'],
            ['·', 'Pops \\(a\\) and \\(b\\), pushes \\(a * b\\)'],
            ['/', 'Pops \\(a\\) and \\(b\\), pushes \\(\\frac{a}{b}\\)'],
            ['%', 'Pops \\(a\\) and \\(b\\), pushes \\(a \\mod b\\)'],
            ['^', 'Pops \\(a\\) and \\(b\\), pushes \\(a ^ b\\)'],
        
            ['⊳', 'Pops \\(a\\), pushes \\(a + 1\\)'],
            ['⊲', 'Pops \\(a\\), pushes \\(a - 1\\)'],
            
            ['⌉', 'Pops \\(a\\), pushes \\(\\lceil a \\rceil\\)'],
            ['⌋', 'Pops \\(a\\), pushes \\(\\lfloor a \\rfloor\\)'],
            
            ['√', 'Pops \\(a\\), pushes \\(\\sqrt{a}\\)'],

            ['⫰', 'Pushes a random number in the range \\([0, 1)\\)']
        ]
    },
    {
        name: 'Logic',
        size: 'normal',
        ops: [
            ['𝔹', 'Pops \\(a\\), pushes 1 if \\(a\\) is truthy or 0 if it is falsy'],

            ['¬', 'Pops \\(a\\), pushes \\(\\lnot a\\)'],
            ['∨', 'Pops \\(a\\) and \\(b\\), pushes \\(a \\lor b\\) (logical or)'],
            ['∧', 'Pops \\(a\\) and \\(b\\), pushes \\(a \\land b\\) (logical and)'],
        
            ['=', 'Pops \\(a\\) and \\(b\\), pushes \\(a = b\\)'],
            ['≠', 'Pops \\(a\\) and \\(b\\), pushes \\(a \\neq b\\)'],
            ['≡', 'Pops \\(a\\) and \\(b\\), pushes 1 if \\(a\\) contains a value equivalent to \\(b\\) or 0 otherwise (not vectorizable)'],
            ['≢', 'Pops \\(a\\) and \\(b\\), pushes 1 if \\(a\\) contains a value not equivalent to \\(b\\) or 0 otherwise (not vectorizable)'],
            ['<', 'Pops \\(a\\) and \\(b\\), pushes \\(a < b\\)'],
            ['≤', 'Pops \\(a\\) and \\(b\\), pushes \\(a \\leq b\\)'],
            ['>', 'Pops \\(a\\) and \\(b\\), pushes \\(a > b\\)'],
            ['≥', 'Pops \\(a\\) and \\(b\\), pushes \\(a \\geq b\\)'],
        
            ['∃', 'Pops \\(a\\), pushes 1 if \\(a\\) contains a truthy value, else 0'],
            ['∄', 'Pops \\(a\\), pushes 1 if \\(a\\) does not contain a truthy value, else 0'],
            ['∀', 'Pops \\(a\\), pushes 1 if every value inside \\(a\\) is truthy, else 0'],
        ]
    },
    {
        name: 'Arrays',
        size: 'big',
        ops: [
            ['𝔽', 'Pops \\(a\\), pushes \\(a\\) converted to float. Useful for non-integer divisions'],

            ['ι', 'Pops \\(a\\), pushes an array from 0 to \\(a\\) (exclusive)'],

            ['↓', 'Pops \\(a\\) and \\(b\\), pushes \\(a^{th}\\) element of \\(b\\)'],
            ['*↓', 'Pops \\(a\\) and peeks \\(b\\), pushes \\(a^{th}\\) element of \\(b\\)'],
            ['↑', 'Pops \\(a\\) and \\(b\\) and peeks \\(c\\), set the \\(a^{th}\\) of \\(c\\) to \\(b\\)'],
            
            ['∑', 'Pops \\(a\\), pushes the sum of all elements in \\(a\\)'],
            ['∏', 'Pops \\(a\\), pushes the product of all elements in \\(a\\)'],
            ['⌊', 'Pops \\(a\\), pushes the minimum of all elements in \\(a\\)'],
            ['⌈', 'Pops \\(a\\), pushes the maximum of all elements in \\(a\\)'],

            ['⍴', 'Pops \\(a\\), pushes the length of \\(a\\)'],

            ['#', 'Pops \\(a\\) and \\(b\\), pushes the number of times \\(a\\) appears in \\(b\\)'],
            ['*#', 'Pops \\(a\\) and peeks \\(b\\), pushes the number of times \\(a\\) appears in \\(b\\)'],
            ['º', 'Pops \\(a\\) and \\(b\\), pushes a vector with the indexes where \\(a\\) appears in \\(b\\)'],
            ['*º', 'Pops \\(a\\) and peeks \\(b\\), pushes a vector with the indexes where \\(a\\) appears in \\(b\\)'],
            ['@', 'Pops \\(a\\) and peeks \\(b\\), pushes a vector containing all \\(b_i\\) for \\(i \\in a\\)'],

            ['⇑', 'Pops \\(a\\), pushes \\(a\\) sorted ascending'],
            ['.⇑', 'Pops \\(a\\), pushes the indexes of \\(a\\) sorted ascending'],
            ['⇓', 'Pops \\(a\\), pushes \\(a\\) sorted descending'],
            ['.⇓', 'Pops \\(a\\), pushes the indexes of \\(a\\) sorted descending'],
            
            ['⊃', 'Pops \\(a\\), pushes \\(a\\) with no repeated elements'],
            ['⊂', 'Pops \\(a\\), pushes a vector \\(v\\) where \\(v_i\\) is the number of times \\(a_i\\) appears in \\(a\\)'],
            
            [',', 'Pops \\(a\\) and peeks \\(b\\), pushes \\(a\\) into \\(b\\)'],
            ['_', 'Pops \\(a\\) and \\(b\\), pushes the concatenation of \\(a\\) and \\(b\\)'],
            ['⨯', 'Pops \\(a\\) and \\(b\\), pushes a vector with the cartesian product of \\(a\\) and \\(b\\)'],
            ['⨝', 'Pops \\(a\\) and \\(b\\), pushes a vector with every element of \\(a\\) and \\(b\\) in pairs'],
            ['⊔', 'Pops \\(a\\), pushes a flattened version of \\(a\\)'],
            ['⤾', 'Pops \\(a\\), pushes a reversed version of \\(a\\)'],
            ['⊞', 'Pops \\(a\\) and \\(b\\), pushes all subvectors of \\(b\\) given by a rolling window of size \\(a\\)'],
            
            ['`', 'Pops \\(a\\), pushes \\(a\\) withouth its first element'],
            ['´', 'Pops \\(a\\), pushes \\(a\\) withouth its last element'],
        ]
    },
    {
        name: 'Storage',
        size: 'normal',
        ops: [
            ['¡', 'Pops \\(a\\)'],
            ['!', 'Peeks \\(a\\), pushes \\(a\\)'],
            ['↶', 'Pops \\(a\\) and \\(b\\), pushes \\(b\\) and \\(a\\) (swap)'],
            ['*↶', 'Pops \\(a\\), \\(b\\) and \\(c\\), pushes \\(b\\) and \\(c\\) and \\(a\\) (prev swap)'],
            ['.↶', 'Pops \\(a\\), swaps the \\(a^{th}\\) element from the end of the stack with the last one'],
            ['↷', 'Pops \\(a\\), pushes a copy of the \\(a^{th}\\) element of the stack from the end'],
            ['⋮', 'Pops \\(a\\), pushes every element of \\(a\\)'],

            ['→v', 'Pops \\(a\\), defines variable \'v\' with the value \\(a\\)'],
            ['→.v', 'Pops \\(a\\), updates variable \'v\' with the value \\(a\\)'],
            ['.v', 'Pushes the value of the variable \'v\''],
            ['←v', 'Deletes variable \'v\''],

            ['$', 'Pops \\(a\\), prints \\(a\\). Use *$ for strings. Add \'.\' just before the $ in order to end the line after printing.'],
        ]
    },
    {
        name: 'Meta',
        size: 'normal',
        ops: [
            ['∴', 'Comment. Can be finished with another \'∴\' or with a line jump'],

            ['|code|→|F|', 'Defines the instruction \'F\' as \'code\''],

            ['⟬⋯⟭', 'While block. Pops \\(a\\) at the end and repeats from the start if \\(a\\) is truthy'],
            ['⟨⋯⟩', 'Code block'],
            ['⦑⋯⦒', 'Context block. Recursion with ∇ inside this block will only call the program within the block'],
            ['{⋯}', 'Pops \\(a\\), executes code inside for each element in \\(a\\)'],
            ['[⋯]', 'Pops \\(a\\), executes code inside for each element in \\(a\\) and pushes an array with every new element added to the stack from the start of the block at the end of each iteration'],
            ['(⋯)', 'Executes code inside and push a vector containing every new value added to the stack from the start of the block'],

            ['?', 'Pops \\(a\\), skip next instruction if \\(a\\) is not truthy'],
            ['◊', 'Peeks \\(a\\), skip next instruction if \\(a\\) is not truthy'],
            [':', 'Pops \\(a\\), skip next instruction if \\(a\\) is truthy'],

            ['∇', 'Calls the whole program recursively with the current stack. If enclosed in a context block, only the code within the block will be called'],
        ]
    },
];

let symbolsContainer = document.getElementById('symbols-container');

for (let group of operators) {
    let symbols = document.createElement('div');
    symbols.classList = 'symbols ' + group.size;

    let title = document.createElement('div');
    title.innerHTML = group.name;
    title.classList = ['symbols-title']
    symbols.appendChild(title);

    for (let [repr, desc] of group.ops) {
        let symbol = document.createElement('div');
        symbol.classList = ['symbol'];
    
        let a = document.createElement('div');
        a.innerHTML = repr;
        let b = document.createElement('div');
        b.innerHTML = desc;
    
        a.classList = ['repr'];
        b.classList = ['description'];
    
        symbol.appendChild(a);
        symbol.appendChild(b);
    
        symbol.onclick = _ => {
            let program = ace.edit('program');
            program.session.insert(program.getCursorPosition(), repr);
            program.focus();
        };
    
        symbols.appendChild(symbol)
    }

    symbolsContainer.appendChild(symbols);
}