# Matrix Factorisation

<details>
<summary><strong>What is the fundamental equation defining an eigenvalue $\lambda$ and its corresponding eigenvector $x$ for a square matrix $A$?</strong></summary>

$Ax = \lambda x$ (where $x \ne 0$).

</details>

<details>
<summary><strong>In terms of the determinant, what condition must $\lambda$ satisfy to be an eigenvalue of matrix $A$?</strong></summary>

$\det(A - \lambda I) = 0$.

</details>

<details>
<summary><strong>How does the geometric multiplicity $gm(\lambda)$ of an eigenvalue compare to its algebraic multiplicity $am(\lambda)$?</strong></summary>

$gm(\lambda) \le am(\lambda)$.

</details>

<details>
<summary><strong>According to the Spectral Theorem, what special basis exists for the vector space of a symmetric matrix $A \in \mathbb{R}^{n \times n}$?</strong></summary>

An orthonormal basis consisting of eigenvectors of $A$.

</details>

<details>
<summary><strong>What specific properties must a matrix $A$ possess to be factorized using Cholesky decomposition?</strong></summary>

It must be symmetric and positive definite.

</details>

<details>
<summary><strong>In the Cholesky decomposition $A = LL^\top$, what is the structural form of the matrix $L$?</strong></summary>

A lower-triangular matrix with positive diagonal elements.

</details>

<details>
<summary><strong>Given the Cholesky factor $L$, how is the determinant of the original matrix $A$ calculated efficiently?</strong></summary>

$\det(A) = (\prod_{i} l_{ii})^2$.

</details>

<details>
<summary><strong>Why is Singular Value Decomposition (SVD) referred to as the &#x27;fundamental theorem of linear algebra&#x27;?</strong></summary>

It can be applied to all matrices (not just square) and it always exists.

</details>

<details>
<summary><strong>In the SVD $A = U\Sigma V^\top$, what mathematical property is shared by the matrices $U$ and $V$?</strong></summary>

They are both orthogonal matrices.

</details>

<details>
<summary><strong>By convention, how are the singular values $\sigma_i$ on the diagonal of $\Sigma$ typically ordered?</strong></summary>

In descending order ($\sigma_1 \ge \sigma_2 \ge \dots \ge 0$).

</details>

<details>
<summary><strong>Using the spectral norm, what is the approximation error when representing matrix $A$ by its rank-$k$ approximation $\hat{A}(k)$?</strong></summary>

$\|A - \hat{A}(k)\|_2 = \sigma_{k+1}$.

</details>

<details>
<summary><strong>The eigenspace $E_{\lambda}$ is defined as the set of all eigenvectors associated with $\lambda$ and is equivalent to the _____ of $(A - \lambda I)$.</strong></summary>

kernel (or null space)

</details>

<details>
<summary><strong>For a symmetric positive definite matrix $S = S^\top = PDP^\top$, how do the SVD matrices $U$ and $V$ relate to the eigendecomposition matrix $P$?</strong></summary>

$U = P = V$.

</details>

<details>
<summary><strong>What is the physical meaning of an eigenvalue $\lambda$ regarding its associated eigenvector during a linear transformation?</strong></summary>

It is the factor by which the eigenvector is stretched.

</details>

<details>
<summary><strong>If an eigenvalue $\lambda$ is negative, what happens to the direction of its corresponding eigenvector under the linear mapping?</strong></summary>

The direction of the stretching is flipped.

</details>

<details>
<summary><strong>In SVD construction, the right-singular vectors $v_j$ are the orthonormal eigenvectors of which symmetric matrix?</strong></summary>

$A^\top A$.

</details>

<details>
<summary><strong>How is the $i$-th left-singular vector $u_i$ derived from the right-singular vector $v_i$ and singular value $\sigma_i$ in SVD?</strong></summary>

$u_i = \frac{1}{\sigma_i} Av_i$.

</details>

<details>
<summary><strong>What is the relationship between the singular values $\sigma_i$ of $A$ and the eigenvalues $\lambda_i$ of $A^\top A$?</strong></summary>

$\sigma_i = \sqrt{\lambda_i}$.

</details>

<details>
<summary><strong>In the rank-$k$ approximation $\hat{A}(k) = \sum_{i=1}^k \sigma_i u_i v_i^\top$, what is the rank of each individual term $u_i v_i^\top$?</strong></summary>

1

</details>

<details>
<summary><strong>Which theorem states that the rank-$k$ approximation $\hat{A}(k)$ is the optimal rank-$k$ representation of $A$ in the spectral norm sense?</strong></summary>

The Eckart-Young Theorem.

</details>

<details>
<summary><strong>Why is the Cholesky decomposition $A = LL^\top$ particularly useful for computing the inverse of an SPD matrix?</strong></summary>

It reduces the task to inverting two triangular matrices, which is computationally easier.

</details>

<details>
<summary><strong>A matrix $D$ is called a _____ matrix if all its off-diagonal elements are zero.</strong></summary>

diagonal

</details>

<details>
<summary><strong>What is the result of raising a diagonal matrix $D$ to the power $k$?</strong></summary>

A diagonal matrix where each diagonal entry $d_{ii}$ is raised to the power $k$.

</details>

<details>
<summary><strong>Under what condition is the Cholesky factor $L$ of a symmetric positive definite matrix unique?</strong></summary>

The diagonal elements of $L$ must be positive.

</details>

<details>
<summary><strong>In the context of SVD, the set of all eigenvalues of a square matrix $A$ is known as the _____.</strong></summary>

eigenspectrum (or spectrum)

</details>

<details>
<summary><strong>How does SVD assist in dimensionality reduction techniques like Principal Component Analysis (PCA)?</strong></summary>

It identifies the directions (singular vectors) along which the data has the most variance (largest singular values).

</details>

<details>
<summary><strong>Which matrix decomposition is preferred for generating samples from a multivariate Gaussian distribution?</strong></summary>

Cholesky decomposition.

</details>

<details>
<summary><strong>The dimension of the eigenspace $E_{\lambda}$ is called the _____ multiplicity of the eigenvalue $\lambda$.</strong></summary>

geometric

</details>

<details>
<summary><strong>In the characteristic polynomial $p_A(\lambda) = \det(A - \lambda I)$, what does the algebraic multiplicity $am(\lambda_i)$ represent?</strong></summary>

The number of times the root $\lambda_i$ appears in the polynomial.

</details>

<details>
<summary><strong>True or False: A matrix and its transpose always possess the same eigenvectors.</strong></summary>

False.

</details>

<details>
<summary><strong>What is the relationship between the singular values of $A$ and the singular values of $A^\top$?</strong></summary>

They are identical.

</details>

<details>
<summary><strong>In SVD, the singular values $\sigma_i$ are the lengths of the _____ of the hyper-ellipse that the unit sphere is mapped to.</strong></summary>

semi-axes

</details>

<details>
<summary><strong>For a diagonal matrix $D$, the determinant is simply the _____ of its diagonal entries.</strong></summary>

product

</details>

<details>
<summary><strong>In a $3 \times 3$ Cholesky factorization, if $a_{11}$ is known, what is the formula for $l_{11}$?</strong></summary>

$l_{11} = \sqrt{a_{11}}$.

</details>

<details>
<summary><strong>Why is it impractical to implement the gradient of a deep neural network explicitly via manual derivation?</strong></summary>

The functions are too complicated, making manual implementation expensive and error-prone.

</details>

<details>
<summary><strong>Backpropagation is a computational application of which rule from vector calculus?</strong></summary>

The chain rule.

</details>

<details>
<summary><strong>What is the rank of a matrix $A$ if it has exactly $r$ non-zero singular values?</strong></summary>

$r$

</details>

<details>
<summary><strong>In the SVD $A = U\Sigma V^\top$, the matrix $U$ represents a rotation in the _____ space.</strong></summary>

codomain (or target space $\mathbb{R}^m$)

</details>

<details>
<summary><strong>The rank-$k$ approximation $\hat{A}(k)$ can be interpreted as a form of _____ compression for matrices.</strong></summary>

lossy

</details>

<details>
<summary><strong>In $A = U\Sigma V^\top$, what are the columns of $U$ called?</strong></summary>

left-singular vectors

</details>

<details>
<summary><strong>In $A = U\Sigma V^\top$, what are the columns of $V$ called?</strong></summary>

right-singular vectors

</details>

<details>
<summary><strong>True or False: Every symmetric matrix is diagonalizable.</strong></summary>

True (by the Spectral Theorem).

</details>

<details>
<summary><strong>What matrix property is required to ensure that all eigenvalues are real and an orthonormal eigenbasis exists?</strong></summary>

The matrix must be symmetric.

</details>

<details>
<summary><strong>In Cholesky decomposition, the matrix $L$ must have _____ diagonal elements to satisfy the square-root equivalent property.</strong></summary>

positive

</details>

<details>
<summary><strong>How is the spectral norm $\|A\|_2$ defined in terms of SVD components?</strong></summary>

It is the largest singular value, $\sigma_1$.

</details>

<details>
<summary><strong>Which matrix decomposition can be used to compute the determinant of an SPD matrix $A$ as $\prod l_{ii}^2$?</strong></summary>

Cholesky decomposition.

</details>

<details>
<summary><strong>The rank-$k$ approximation of a matrix effectively discards the _____ singular values to reduce noise or save space.</strong></summary>

smallest (or least significant)

</details>

<details>
<summary><strong>In the Stonehenge image example, what was the approximate data reduction percentage for a rank-5 SVD approximation?</strong></summary>

Approximately $0.6\%$ of the original image size.

</details>

<details>
<summary><strong>What is the primary motivation for using Cholesky decomposition in deep stochastic models like Variational Auto-encoders (VAEs)?</strong></summary>

To perform a linear transformation of random variables for computing gradients.

</details>

<details>
<summary><strong>If $A \in \mathbb{R}^{m \times n}$, what are the dimensions of the singular value matrix $\Sigma$ in the full SVD?</strong></summary>

$m \times n$.

</details>

<details>
<summary><strong>The homogeneous system $(A - \lambda I)x = 0$ having a non-trivial solution is equivalent to saying $\text{rank}(A - \lambda I) &lt; \dots$?</strong></summary>

$n$ (where $A$ is $n \times n$).

</details>

<details>
<summary><strong>True or False: If $x$ is an eigenvector of $A$ with eigenvalue $\lambda$, then $x$ is also an eigenvector of $A^2$ with eigenvalue $\lambda^2$.</strong></summary>

True.

</details>

<details>
<summary><strong>In the Cholesky factorization $A = LL^\top$, $L$ is a _____ triangular matrix.</strong></summary>

lower

</details>

<details>
<summary><strong>How does SVD quantify the change in geometry between vector spaces $V$ and $W$ under a linear mapping $\Phi$?</strong></summary>

By decomposing the mapping into rotations (orthogonal matrices) and scaling (singular values).

</details>

<details>
<summary><strong>What happens to the singular values $\sigma_i$ of a matrix $A$ if the matrix is multiplied by a scalar $c &gt; 0$?</strong></summary>

They are all multiplied by $c$.

</details>

<details>
<summary><strong>The sum $\sum_{i=1}^r \sigma_i u_i v_i^\top$ is called the _____ expansion of matrix $A$.</strong></summary>

outer-product (or SVD)

</details>

<details>
<summary><strong>If a square matrix $A$ is invertible, how can its eigenvalues be related to the eigenvalues of $A^{-1}$?</strong></summary>

The eigenvalues of $A^{-1}$ are the reciprocals ($1/\lambda_i$) of the eigenvalues of $A$.

</details>

<details>
<summary><strong>In the Cholesky factor $L$, the entry $l_{21}$ is calculated as $a_{21} / \dots$.</strong></summary>

$l_{11}$

</details>

<details>
<summary><strong>The process of approximating a high-rank matrix with a lower-rank one to filter out noise is called _____ filtering.</strong></summary>

noise

</details>

<details>
<summary><strong>In SVD, the orthogonal matrix $V$ corresponds to the orthonormal eigenbasis of which matrix?</strong></summary>

$A^\top A$.

</details>

<details>
<summary><strong>True or False: The Singular Value Decomposition is unique for every matrix.</strong></summary>

False (singular values are unique, but singular vectors are not necessarily unique).

</details>

<details>
<summary><strong>A symmetric matrix is positive definite if all its _____ are strictly positive.</strong></summary>

eigenvalues

</details>

<details>
<summary><strong>What is the term for the computational technique that calculates gradients of complex functions automatically?</strong></summary>

Automatic Differentiation.

</details>

<details>
<summary><strong>In a diagonal matrix $D$, what is the inverse $D^{-1}$ if any $d_{ii} \ne 0$?</strong></summary>

A diagonal matrix with entries $1/d_{ii}$.

</details>

<details>
<summary><strong>The error $\|A - \hat{A}(k)\|_2$ in the spectral norm is equal to the _____ singular value.</strong></summary>

$(k+1)$-th

</details>

<details>
<summary><strong>For any matrix $A$, the product $A^\top A$ is always symmetric and positive _____.</strong></summary>

semidefinite

</details>

<details>
<summary><strong>Which decomposition is specifically designed to handle the square-root equivalent for symmetric, positive definite matrices?</strong></summary>

Cholesky decomposition.

</details>

<details>
<summary><strong>The trace of a square matrix is equal to the _____ of its eigenvalues.</strong></summary>

sum

</details>

<details>
<summary><strong>The determinant of a square matrix is equal to the _____ of its eigenvalues.</strong></summary>

product

</details>

<details>
<summary><strong>In SVD, the singular values $\sigma_i$ are always _____.</strong></summary>

non-negative ($\ge 0$).

</details>

<details>
<summary><strong>What matrix product yields a symmetric matrix whose eigenvalues are the squares of the singular values of $A$?</strong></summary>

$A^\top A$ (or $AA^\top$).

</details>

<details>
<summary><strong>If a matrix $A$ is $m \times n$ with $m &lt; n$, at most how many non-zero singular values can it have?</strong></summary>

$m$

</details>

<details>
<summary><strong>The Cholesky factor $L$ is _____ unique for an SPD matrix.</strong></summary>

unique (provided diagonal elements are positive).

</details>

<details>
<summary><strong>In SVD, $U$ and $V$ are orthogonal, meaning $U^\top = U^{-1}$ and $V^\top = \dots$?</strong></summary>

$V^{-1}$

</details>

<details>
<summary><strong>The Spectral Theorem implies that symmetric matrices can be diagonalized by _____ matrices.</strong></summary>

orthogonal

</details>

