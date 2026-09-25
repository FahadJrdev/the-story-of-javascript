; In Scheme, a function is a value.
; You can hand it to another function:
(define (twice f x)
  (f (f x)))

(twice (lambda (n) (* n 2)) 5)   ; => 20
