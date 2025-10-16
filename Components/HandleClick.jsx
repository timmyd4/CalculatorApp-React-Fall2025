export default function HandleClick(event, props)
{
        const value = event.target.textContent;
        props.setArr(prev => {
        
        const updated = [...prev, value];

        
        if (value === "=") {

            const last = updated[updated.length - 2];
            if (!last || ["+", "-", "*", "/"].includes(last))
            {
                return prev;
            }

            try
            {
                const expression = updated.slice(0, -1).join(""); 
                const result = eval(expression); 
                props.setState(result.toString());
                return [result.toString()]; 
            } 
            catch
            {
                props.setState("Error");
                return [];
            }
        }

        return updated;
    });
    }